import classNames from "classnames";

/* eslint-disable @typescript-eslint/no-explicit-any */
const DeleteIcon = (props: any) => {
  const { variant, className } = props;

  return (
    <svg
      className={classNames(
        "text-black-primary hover:text-gray-dark",
        className,
        { "disbaled text-gray hover:text-gray": variant === "inactive" }
      )}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3333 5.00008V4.33341C12.3333 3.39999 12.3333 2.93328 12.1517 2.57676C11.9919 2.26316 11.7369 2.00819 11.4233 1.8484C11.0668 1.66675 10.6001 1.66675 9.66667 1.66675H8.33333C7.39991 1.66675 6.9332 1.66675 6.57668 1.8484C6.26308 2.00819 6.00811 2.26316 5.84832 2.57676C5.66667 2.93328 5.66667 3.39999 5.66667 4.33341V5.00008M7.33333 9.58342V13.7501M10.6667 9.58342V13.7501M1.5 5.00008H16.5M14.8333 5.00008V14.3334C14.8333 15.7335 14.8333 16.4336 14.5608 16.9684C14.3212 17.4388 13.9387 17.8212 13.4683 18.0609C12.9335 18.3334 12.2335 18.3334 10.8333 18.3334H7.16667C5.76654 18.3334 5.06647 18.3334 4.53169 18.0609C4.06129 17.8212 3.67883 17.4388 3.43915 16.9684C3.16667 16.4336 3.16667 15.7335 3.16667 14.3334V5.00008"
        stroke="currentColor"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
