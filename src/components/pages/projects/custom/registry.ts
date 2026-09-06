import type { Component } from "vue";

/**
 * Maps a project's slug to its own bespoke detail component, for projects where the generic
 * ProjectDetailContent layout undersells them (see Project.custom in assets/data/projectsData.ts).
 */
export const customProjectComponents: Record<string, () => Promise<Component>> = {
  telumera: () => import("./TelumeraProject.vue"),
};
