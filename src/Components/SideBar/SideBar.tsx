import { NavLink } from "solid-app-router";
import type { Component } from "solid-js";
import { navSignal } from "../../Store/side-bar-store";
import { For } from "solid-js";

export const SideBar: Component = () => {
  const [navs, _] = navSignal;
  return (
    <div class="flex flex-col max-w-xs w-64 fixed h-screen z-10 pl-4 border-gray-100 border-r-2">
      <p class="flex relative justify-start items-center text-4xl mb-6 ml-1 font-bold text-gray-800">
        Deriv API
      </p>
      <For each={navs()}>
        {(item, index) => (
          <NavLink
            data-index={index}
            activeClass="before:sidebar-after bg-gray-100 font-bold text-black"
            class="flex relative justify-start items-center py-2.5 pr-4 pl-4 mb-4 text-base rounded-l-md h-11 text-gray-500 hover:bg-gray-100 hover:before:sidebar-before"
            href={item.path}
            end
          >
            {item.label}
          </NavLink>
        )}
      </For>
    </div>
  );
};