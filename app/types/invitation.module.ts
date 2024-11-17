export interface Invitation {
  id: number | string;
  groom_name: string;
  bride_name: string;
  groom_dad_name: string;
  groom_mom_name: string;
  bride_dad_name: string;
  bride_mom_name: string;
  start_date: string;
  start_time: string;
  location_id: string;
  background_img_url: string;
}

export interface Location {
  id: number | string;
  title: string;
  detail: string;
  tel: string;
}
