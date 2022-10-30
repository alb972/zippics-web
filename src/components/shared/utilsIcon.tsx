/* eslint-disable max-len */
import React from "react";

export const RadioBtnIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <g id="selectedRadio" transform="translate(-353 -550)">
        <g
          id="Ellipse_4"
          data-name="Ellipse 4"
          transform="translate(353 550)"
          fill="#fff"
          stroke="#d6d6d7"
          strokeWidth="1">
          <circle cx="8" cy="8" r="8" stroke="none" />
          <circle cx="8" cy="8" r="7.5" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export const SelectedRadioBtnIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <g id="selectedRadio" transform="translate(-353 -550)">
        <g
          id="Ellipse_4"
          data-name="Ellipse 4"
          transform="translate(353 550)"
          fill="#fff"
          stroke="#d6d6d7"
          strokeWidth="1">
          <circle cx="8" cy="8" r="8" stroke="none" />
          <circle cx="8" cy="8" r="7.5" fill="none" />
        </g>
        <circle
          id="Ellipse_5"
          data-name="Ellipse 5"
          cx="4"
          cy="4"
          r="4"
          transform="translate(357 554)"
          fill="#0c0c0c"
        />
      </g>
    </svg>
  );
};

export const CheckboxIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
      <g id="selectedCheckbox" transform="translate(-353 -550)">
        <g
          id="Rectangle_133"
          data-name="Rectangle 133"
          transform="translate(353 550)"
          fill="#fff"
          stroke="#d4d4d5"
          strokeWidth="1">
          <rect width="17" height="17" rx="4" stroke="none" />
          <rect x="0.5" y="0.5" width="16" height="16" rx="3.5" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export const SelectedCheckboxIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
      <g id="selectedCheckbox" transform="translate(-353 -550)">
        <g
          id="Rectangle_133"
          data-name="Rectangle 133"
          transform="translate(353 550)"
          fill="#fff"
          stroke="#d4d4d5"
          strokeWidth="1">
          <rect width="17" height="17" rx="4" stroke="none" />
          <rect x="0.5" y="0.5" width="16" height="16" rx="3.5" fill="none" />
        </g>
        <path
          id="check"
          d="M3.975,73.654l-3.8-3.8a.585.585,0,0,1,0-.828L1,68.2a.585.585,0,0,1,.828,0l2.562,2.562L9.877,65.27a.585.585,0,0,1,.828,0l.827.828a.585.585,0,0,1,0,.828L4.8,73.654a.585.585,0,0,1-.828,0Z"
          transform="translate(355.698 488.777)"
          fill="#0c0c0c"
        />
      </g>
    </svg>
  );
};

export const DeviceDetailsCardIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
      <g id="a-LockIcon" transform="translate(-159 -198)">
        <circle id="BoundingBox" cx="23" cy="23" r="23" transform="translate(159 198)" fill="#fff" />
      </g>
    </svg>
  );
};

export const DeviceInfoItemIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
      <g id="a-LockIcon" transform="translate(-159 -198)">
        <circle id="BoundingBox" cx="23" cy="23" r="23" transform="translate(159 198)" fill="#9E9E9E" />
      </g>
    </svg>
  );
};

export const EditParamIcon = ({ color = "#000000" }: { color?: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
    </svg>
  );
};

export const DeleteItemIcon = ({ color = "#000000" }: { color?: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
    </svg>
  );
};

export const ValidAppIcon = ({ color = "#000000" }: { color?: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={color}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z" />
    </svg>
  );
};

export const HelpIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g id="help_outline_black_24dp">
        <circle id="Ellipse_2" data-name="Ellipse 2" cx="10" cy="10" r="10" fill="#e6e6e6" />
        <path
          id="Tracé_2"
          data-name="Tracé 2"
          d="M11,18h2V16H11ZM12,6a4,4,0,0,0-4,4h2a2,2,0,0,1,4,0c0,2-3,1.75-3,5h2c0-2.25,3-2.5,3-5A4,4,0,0,0,12,6Z"
          transform="translate(-2 -2)"
          fill="#303030"
        />
      </g>
    </svg>
  );
};

export const SelectedHelpIcon = ({ color = "#000000" }: { color?: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="help_outline_black_24dp" transform="translate(28 27)">
        <g
          id="Ellipse_2"
          data-name="Ellipse 2"
          transform="translate(-28 -27)"
          fill="#bebebe"
          stroke="#e6e6e6"
          strokeWidth="2">
          <circle cx="12" cy="12" r="12" stroke="none" />
          <circle cx="12" cy="12" r="11" fill="none" />
        </g>
        <path
          id="Tracé_2"
          data-name="Tracé 2"
          d="M11,18h2V16H11ZM12,6a4,4,0,0,0-4,4h2a2,2,0,0,1,4,0c0,2-3,1.75-3,5h2c0-2.25,3-2.5,3-5A4,4,0,0,0,12,6Z"
          transform="translate(-28 -27)"
          fill="#303030"
        />
      </g>
    </svg>
  );
};

export const LoaderIcon = ({ color = "#3174de" }: { color?: string }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
      <path
        fill={color}
        d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
