export const FetchDataForm = (info) => {
  return {
    dt: info.TIMESTAMP,
    path: info.PATH,
    energy_category: info.ENERGY_CATEGORY,
    volume: info.VOLUME,
    unit: info.UNIT,
    source_company: info.SOURCE_COMPANY,
    source_plant: info.SOURCE_PLANT,
    destination_company: info.SINK_COMPANY,
    sink_plant: info.SINK_PLANT,
  };
};
