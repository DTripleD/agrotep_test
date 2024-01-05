import { day, month, year } from "./date";

export const filter = (today, small, offices) => {
  if (!today && !small) {
    return offices;
  }

  if (today && small) {
    return offices
      .map((office) => ({
        ...office,
        data: office.data.filter((item) => item.years <= 2),
      }))
      .map((office) => ({
        ...office,
        data: office.data.filter(
          (item) => item.receiving === `${year}-${month}-${day}`
        ),
      }));
  }

  if (small && !today) {
    return offices.map((office) => ({
      ...office,
      data: office.data.filter((item) => item.years <= 2),
    }));
  }

  if (today && !small) {
    return offices.map((office) => ({
      ...office,
      data: office.data.filter(
        (item) => item.receiving === `${year}-${month}-${day}`
      ),
    }));
  }
};
