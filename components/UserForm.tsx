export default function UserForm() {
  return(
    <form className="form-control w-full p-3">
      <div className="md:flex gap-3 w-full">
        <div className="w-full">
          <label htmlFor="name" className="label">
            <span className="label-text">First Name</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-sm md:input-md w-full"/>
        </div>
        <div className="w-full">
          <label htmlFor="name" className="label">
            <span className="label-text">Last Name</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-sm md:input-md w-full"/>
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="name" className="label">
          <span className="label-text">Adress - Line 1</span>
          <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-sm md:input-md w-full"/>
      </div>
      <div className="w-full">
        <label htmlFor="name" className="label">
          <span className="label-text">Adress - Line 2</span>
          <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-sm md:input-md w-full"/>
      </div>
      <div className="md:flex gap-3 w-full">
        <div className="w-full">
          <label htmlFor="name" className="label">
            <span className="label-text">State / Province</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-sm md:input-md w-full"/>
        </div>
        <div className="w-full">
          <label htmlFor="name" className="label">
            <span className="label-text">ZIP / Postal code</span>
            <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-sm md:input-md w-full"/>
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="name" className="label">
          <span className="label-text">Country</span>
          <span className="label-text-alt text-error font-bold text-lg translate-y-1">*</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-sm md:input-md w-full"/>
      </div>
    </form>
  )
}