enum Status{
  Pending,Deployed,Archived,ReadyToDeploy
}
enum CheckInOut{
  CheckIn,CheckOut
}

export interface IAsset{
  assetTag?:string,
  manufact?:string,
  deviceImage?:string,
  serial?:string,
model?:string,
category?:string,
status?:Status,
location?:string,
purchaseCost?:number,
checkInOut?:CheckInOut
}