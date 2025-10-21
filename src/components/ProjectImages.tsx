'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { FiTrash2, FiUpload, FiLoader } from 'react-icons/fi';
import { toast } from 'sonner';

import { VideoPlayer } from './VideoPlayer';

type GalleryImage = { filename: string; url: string };

export function ProjectImages() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [videos, setVideos] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [deleteMode, setDeleteMode] = useState(false); // NEW
  const selectedList = useMemo(
    () => Object.keys(selected).filter((k) => selected[k]),
    [selected]
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggle = (filename: string) => {
    if (deleteMode) {
      setSelected((prev) => ({ ...prev, [filename]: !prev[filename] }));
    }
  };

  const fetchImages = async (withoutLoading?: boolean) => {
    if (!withoutLoading) setLoading(true);
    try {
      const res = await fetch('/api/admin/uploads', { credentials: 'include' });
      const json = await res.json();
      if (json?.success && Array.isArray(json.images) && Array.isArray(json.videos)) {
        setImages(json.images);
        setVideos(json.videos);
        setSelected({});
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteSelected = async () => {
    if (!deleteMode) {
      // Enter delete mode
      setDeleteMode(true);
      return;
    }

    // Execute delete
    if (!selectedList.length) {
      setDeleteMode(false);
      return;
    }

    toast(`למחוק ${selectedList.length} פריטים?`, {
      action: {
        label: 'אישור',
        onClick: async () => {
          const t = toast.loading('מוחק קבצים…');
          try {
            const res = await fetch('/api/admin/uploads', {
              method: 'DELETE',
              credentials: 'include',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ filenames: selectedList }),
            });
            const json = await res.json();
            if (json?.success) {
              setImages((prev) => prev.filter((i) => !selectedList.includes(i.filename)));
              setVideos((prev) => prev.filter((i) => !selectedList.includes(i.filename)));
              setSelected({});
              toast.success('הפריטים נמחקו בהצלחה', { id: t });
            } else {
              toast.error(json?.error || 'שגיאה במחיקה', { id: t });
            }
          } catch {
            toast.error('שגיאה במחיקה', { id: t });
          } finally {
            setDeleteMode(false);
          }
        },
      },
      cancel: {
        label: 'ביטול',
        onClick: () => { setDeleteMode(false); setSelected({}); },
      },
    });
  };

  const handlePickFiles = () => fileInputRef.current?.click();

  const handleFilesChosen = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const t = toast.loading('מעלה קבצים…');
    const form = new FormData();
    Array.from(files).forEach((f) => form.append('files', f));
    try {
      const res = await fetch('/api/admin/uploads', {
        method: 'POST',
        credentials: 'include',
        body: form,
      });
      const json = await res.json();
      if (json?.success) {
        await fetchImages(true);
        toast.success('הקבצים הועלו בהצלחה', { id: t });
      } else {
        toast.error(json?.error || 'שגיאה בהעלאה', { id: t });
      }
    } catch {
      toast.error('שגיאה בהעלאה', { id: t });
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section className="w-full">
      <h2 className="text-[#111618] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
        תמונות בפרויקט
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] min-h-24 gap-2 sm:gap-3 p-4 sm:px-6">
        {loading && (
          <div className="col-span-full flex flex-col items-center justify-center py-8">
            <FiLoader className="w-8 h-8 text-[#13a4ec] animate-spin" />
            <p className="mt-2 text-[#617c89] text-sm">טוען תמונות…</p>
          </div>
        )}
        {!loading && images.length === 0 && (
          <div className="col-span-full text-[#617c89] text-sm">אין תמונות להצגה</div>
        )}

        {images.map((img) => {
          const isSelected = !!selected[img.filename];
          return (
            <div key={img.filename} className="flex flex-col gap-3 max-w-[200px]">
              <button
                type="button"
                className="relative w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg outline-0 focus:outline-none"
                style={{ backgroundImage: `url("${img.url}")` }}
                onClick={() => toggle(img.filename)}
                aria-pressed={isSelected}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-lg ring-2`}
                />

                {isSelected && deleteMode && (
                  <>
                    <span className="absolute inset-0 rounded-lg overflow-hidden">
                      <span
                        className="absolute inset-0 bg-center bg-cover"
                        style={{
                          backgroundImage: `url("${img.url}")`,
                          filter: 'blur(6px)',
                          transform: 'scale(1.05)',
                        }}
                      />
                      <span className="absolute inset-0 bg-white/30" />
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center z-10">
                      <FiTrash2 className="w-8 h-8 text-[#13a4ec] drop-shadow" />
                    </span>
                  </>
                )}
              </button>
              <p className="text-[#617c89] text-xs truncate text-center">{img.filename}</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-[#111618] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-2">
        סרטונים בפרויקט
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] min-h-24 gap-2 sm:gap-3 p-4 sm:px-6">
        {loading && (
          <div className="col-span-full flex flex-col items-center justify-center py-8">
            <FiLoader className="w-8 h-8 text-[#13a4ec] animate-spin" />
            <p className="mt-2 text-[#617c89] text-sm">טוען סרטונים…</p>
          </div>
        )}
        {!loading && videos.length === 0 && (
          <div className="col-span-full text-[#617c89] text-sm">אין סרטונים להצגה</div>
        )}

        {videos.map((vid) => {
          const isSelected = !!selected[vid.filename];
          return (
            <div key={vid.filename} className="flex flex-col gap-3 max-w-[200px]">
              {deleteMode ? (
                <button
                  type="button"
                  className="relative w-full aspect-square rounded-lg outline-0 focus:outline-none overflow-hidden"
                  onClick={() => toggle(vid.filename)}
                  aria-pressed={isSelected}
                >
                  <video
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    src={vid.url}
                    preload="metadata"
                    muted
                    playsInline
                    style={{ filter: isSelected ? 'blur(6px)' : 'none' }}

                  />
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-lg ring-2 ${isSelected ? 'ring-[#13a4ec]' : 'ring-transparent'}`}
                  />

                  {isSelected && (
                    <>
                      <span className="absolute inset-0 rounded-lg bg-white/30" />
                      <span className="absolute inset-0 flex items-center justify-center z-10">
                        <FiTrash2 className="w-8 h-8 text-[#13a4ec] drop-shadow" />
                      </span>
                    </>
                  )}
                </button>
              ) : (
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <VideoPlayer src={vid.url} />
                </div>
              )}
              <p className="text-[#617c89] text-xs truncate text-center">{vid.filename}</p>
            </div>
          );
        })}
      </div>

      <div className="px-4 sm:px-6 py-3">
        <div className="rounded-lg border border-[#dbe2e6] bg-[#f8fbfc] p-3">
          <p className="text-[#111618] text-base font-medium leading-normal pb-1">הערות למנהל</p>
          <ul className="text-[#617c89] text-sm list-disc ps-5 space-y-1">
            <li>שם הקובץ favicon.ico יופיע אוטומטית בלשונית התמונות.</li>
            <li>ניתן להעלות תמונות (PNG/JPG/WEBP/GIF/SVG/ICO) או וידאו (MP4/MOV/WEBM/MKV).</li>
            <li>מחיקה תסיר את הקבצים לצמיתות מתיקיית public/.</li>
          </ul>
        </div>
      </div>

      <div className="flex px-4 sm:px-6 py-3 gap-3 justify-start">
        <button
          onClick={handlePickFiles}
          className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#13a4ec] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate flex items-center gap-2">
            <FiUpload className="w-4 h-4" />
            העלאת קבצים
          </span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleFilesChosen}
        />
        <button
          onClick={deleteSelected}
          className="flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f3f4] text-[#111618] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">
            {deleteMode ? `מחק ${selectedList.length} פריטים נבחרים` : 'בחר פריטים למחיקה'}
          </span>
        </button>
      </div>
    </section>
  );
}