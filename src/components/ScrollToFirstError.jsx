import React, { useEffect } from "react";
import { useFormikContext } from "formik";

const ScrollToFirstError = () => {
  const formik = useFormikContext();
  const submitting = formik?.isSubmitting

  useEffect(() => {
    const el = document.querySelector(".errorMsg");
    el?.scrollIntoView();
  }, [submitting]);

  return null;
};

export default ScrollToFirstError;
