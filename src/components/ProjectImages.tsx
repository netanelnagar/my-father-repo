'use client';

export function ProjectImages() {
  return (
    <section className="w-full">
      <h2 className="text-[#111618] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 sm:px-6 pb-3 pt-5">
        Project Images
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 sm:px-6">
        {[
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDM8JAj-kNZApTC-HC8k_PooOTT99GoeM1SV-zGW8fjILtI282VZm_BI961_Bm8UFEhEDZLA_MSmivp84ooRiLziQuXJlyFUKqWhyJE_gY2XbaoA8beqfujUOx8KsBYDzbg78rIZ2KtQ9WKqh2DTo9rEwGzUBlDLjpj2h2iOW_1wWT_zAGASUhXngvmImSf6kqB6folRvL2TLQ5cOsmsFUVbPexjedPUJdHBVjr8sx1rkig9retbDXvlTKpkDaZL3ZV2E3tkZ5veDLA',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBMYSDcSSEKLyZ-OUExlu63N0BJlfiHyb-UN-DhrtD21SeLf2_gBAZ_z_ba87uTNOCRDQqvMZnzTYHoE0BoQP4K7sbjI2ptmLnvGIrbICqrnE63if7IjeTIC9vU3-ezBX1A7F0K-VRF8OyhuYVSd9ZNYPHRm3TF4G43c0nwZL0JSPSFrM_5F3KBLVVoVwYCSjopww6JVN5DheuzDABI3UwIOpw9W9LOUfVwQ40f8660eE8PMpogvK8RDnMbed7P5E3otV-sNXMHhjmb',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCP4vMsc15-B4TVIlUUvew2JdfaLtjOcmwjJrXQcRiwvMyU2xoeQT3It74_cXiXMNPP2cRyYIWp4KXnfA77nxGYSEKMokKHzqkveMN5BMMcOXhsNjuN8NRIY0N8Q7HiJORFuiDsZPqd-Pu8Ze5th9-Ocb1eeb9ftAPtVtpCk5yZ0A4tcsCB9_KuqZ1ArVNJs3nkvt3rOeGn2xfP0VcOUzL10YiMVe1xg2PldT3Oo6JPs53xexF4e1gK8sHWx32-WESer0YcVau12wAF',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCXvfgDJ4o5YqM1dPUJoRWU9TgQKpomd4S7TU6I2klyQa7ZVC12kOOT9tHuAK_OSvtMCVrv1lZH1FRNVpKd0_KtIYLFCfqAgLcjsPmZF7hmdrogh2s03TEHJIcoqAPhxytvCUkmYBLasTZhZevyvqblLSBffqajtniS-3HQT4gI_iPRRaN3V6SjGLFzgz9mNt46v8XT-uVDKfJ7dSMDOMLQYlI5N1aPq3QEXjHdKpv8qAnfNwGyzOAAeKnxckdH8EAW16LO9ZhHOPRw',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDZKZFIVHLCsvDVpXh5HqFpmDpqxQ_bzUqJgFl9QwWF3q724jUg4h5yUSQSYO3N7emv8BqvmlUP0WGm54mlG-uWwxAt8cj1PrC9ARwN5kOpgYScl_jl4_jyLehRx8rHr9AiExq6aKZNSYrhKVlOh77ufdUELLTtuuRmXkKhKldiLuzIoIre81WnaQHaZBFTVvPi-HYiF4h1UGclO9yQsEYO85OuWFgeiyMoREK4EqPXn_63nbMb_CqJr4DB7lTOKim21FRSGA1ypG2t',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC8CIL-oteIAiGqEx0DF72VPxc419JNmBQi8y4TK6LuAqr75gJnNhbIWM73Dhw4kFruKo9PYPZcnOkpSN6rh_tesp2Oa47DG5XFuJ8W_Ex2PNEOGAp-8n5FLAcLXhM1qe3z3ZJNhFOnDRuqK5vmSeQTCjTps-97vifAp98JahWTzKSyoYRm3aISHk6_rKs3TBuYQhJpEkdkS7U3ScXzJCKUO_0Sb-HfR2Wx-m6KDaircFh3BJ1f3o0cSdtTO92haFEJcLzyVvP_navE',
        ].map((src) => (
          <div key={src} className="flex flex-col gap-3">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" style={{ backgroundImage: `url("${src}")` }} />
          </div>
        ))}
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 sm:px-6 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#111618] text-base font-medium leading-normal pb-2">Add Notes for Special Names</p>
          <input
            placeholder="Enter notes"
            className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111618] focus:outline-0 focus:ring-0 border border-[#dbe2e6] bg-white focus:border-[#dbe2e6] h-14 placeholder:text-[#617c89] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>
      <div className="flex px-4 sm:px-6 py-3 justify-end">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f3f4] text-[#111618] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Delete Selected Images</span>
        </button>
      </div>
    </section>
  );
}