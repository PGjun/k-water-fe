const Back = () => (
  <svg
    width="25"
    height="22"
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.70947 11L23.9997 11"
      stroke="#0A0A0A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11.8307 21L1.99977 11L11.8307 1"
      stroke="#0A0A0A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const CheckBoxOn = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="18" height="18" rx="2" fill="#2262C6" />
    <path
      d="M12.0267 7.15165L7.875 11.3033L5.97335 9.40165"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const CheckBoxOff = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="18" height="18" rx="2" fill="#C4C4C4" />
    <path
      d="M12.0267 7.15165L7.875 11.3033L5.97335 9.40165"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

export const Icon = {
  Back,
  CheckBoxOn,
  CheckBoxOff,
}
