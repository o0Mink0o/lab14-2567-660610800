export interface TermsAndConditionsProps {
  opened: boolean;
  close: () => void;
}

  export interface ReviewProps {
   
    id: number,
    name: string,
    rating: number,
    comment: string,
  }
  export interface footerProps  {
    fullName : string;
    studentId: string;
    year: string;
    
  }