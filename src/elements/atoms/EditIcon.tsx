import classNames from "classnames";

/* eslint-disable @typescript-eslint/no-explicit-any */
const EditIcon = (props: any) => {
  const { variant, className } = props;

  return (
    <svg
      className={classNames(
        "text-black-primary hover:text-gray-dark",
        className,
        { "disbaled text-gray hover:text-gray": variant === "inactive" }
      )}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.39735 15.0963C1.43564 14.7517 1.45478 14.5794 1.50691 14.4184C1.55316 14.2755 1.61851 14.1396 1.70118 14.0142C1.79436 13.8729 1.91694 13.7503 2.16209 13.5052L13.1673 2.49992C14.0878 1.57945 15.5802 1.57945 16.5007 2.49993C17.4211 3.4204 17.4211 4.91279 16.5007 5.83326L5.49542 16.8385C5.25027 17.0836 5.1277 17.2062 4.98639 17.2994C4.86102 17.3821 4.72506 17.4474 4.58219 17.4937C4.42115 17.5458 4.24887 17.5649 3.90429 17.6032L1.08398 17.9166L1.39735 15.0963Z"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
