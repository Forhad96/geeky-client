import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

interface DropdownItems {
  key: string;
  label: string;
  className?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
}

interface DropdownProps {
  triggerContent?: React.ReactNode;
  items:DropdownItems[]
}

const TriggerContentEllipse = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

const CustomDropdown: React.FC<DropdownProps> = ({
  triggerContent = <TriggerContentEllipse />,
  items,
}) => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <div>{triggerContent}</div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem
              key={item.key}
              color={item.key === "delete" ? "danger" : "default"}
              className={item.key === "delete" ? "text-danger" : ""}
            >
              {item.label}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
