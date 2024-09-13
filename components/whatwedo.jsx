const WhatWeDoSections = ({ children, title, body }) => {
  return (
    <div className="w-full max-w-[340px] mx-auto space-y-6 text-center">
      <div className="mx-auto w-fit">{children}</div>
      <div className="space-y-3">
        <h4 className="uppercase px-10">{title}</h4>
        <p className="text-body1">{body}</p>
      </div>
    </div>
  );
};

export default WhatWeDoSections;
