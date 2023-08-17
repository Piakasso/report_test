export const showRenderedReports = (reports) => ({
  type: "SHOW_RENDERED_REPORTS",
  payload: reports,
});

export const nextRenderedReports = (reports) => ({
  type: "NEXT_RENDERED_REPORTS",
  payload: reports,
});

export const prevRenderedReports = (reports) => ({
  type: "PREV_RENDERED_REPORTS",
  payload: reports,
});
