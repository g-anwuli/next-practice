"use client"
import dynamic from "next/dynamic";

const MyCombobox = dynamic(() =>
  import("./AutoComplete").then((mod) => mod.MyCombobox)
);
const MyDisclosure = dynamic(() =>
  import("./Disclosure").then((mod) => mod.MyDisclosure)
);
const MyListbox = dynamic(() =>
  import("./ListBox").then((mod) => mod.MyListbox)
);
const MyDropdown = dynamic(() =>
  import("./Menu").then((mod) => mod.MyDropdown)
);
const MyModal = dynamic(() => import("./Modal").then((mod) => mod.MyModal));
const MyPopover = dynamic(() =>
  import("./Popover").then((mod) => mod.MyPopover)
);
const SwitchComp = dynamic(() =>
  import("./Switch").then((mod) => mod.SwitchComp)
);
const MyTab = dynamic(() => import("./Tab").then((mod) => mod.MyTab));

export default function Wrapper() {
  return (
    <div>
      <div>
        <MyCombobox />
      </div>
      <div>
        <MyDisclosure />
      </div>
      <div>
        <MyListbox />
      </div>
      <div>
        <MyDropdown />
      </div>
      <div>
        <MyModal />
      </div>
      <div>
        <MyPopover />
      </div>
      <div>
        <SwitchComp />
      </div>
      <div>
        <MyTab />
      </div>
    </div>
  );
}
