export interface OrderLogs
{
    ORDERID : number;
    EMPLOYEEIDBOOKEDBY : number;
    EMPLOYEEIDBOOKEDFOR : number;
    ORDERTYPE : string;
    MEALTYPE : string;
    BOOKINGDATE :string;
    BOOKINGINITIALDATE : Date;
    BOOKINGENDDATE : Date;
    AMOUNT : number;
    ORDERSTATUS : string;
}