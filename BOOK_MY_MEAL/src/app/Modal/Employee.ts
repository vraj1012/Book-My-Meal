export interface Employee 
{
    EMPLOYEEID : number;
    FIRSTNAME : string;
    LASTNAME : string;
    PHONENUMBER : string;
    DOB : string;
    GENDER : string;
    DEPTID : number;
    EMAIL : string;
    PASSWORD : string;
    ISACTIVE : boolean;
    ISDELETED : boolean;
    REGISTRATIONDATE : string;
    MODIFIEDON : string;
}

export interface SignUpEmployee
{
    FIRSTNAME : string;
    LASTNAME : string;
    PHONENUMBER : string;
    DOB : string;
    GENDER : string;
    DEPTID : number;
    EMAIL : string;
    PASSWORD : string;
}