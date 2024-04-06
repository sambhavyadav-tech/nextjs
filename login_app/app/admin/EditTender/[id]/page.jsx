
import EditTenderForm from "@/components/editTenderForm";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

const getTenderById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/admin/updateTender/${id}`, {
     method: "GET",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tender");
    }
const data =await  res.json();
return data;
  
    
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTender({ params }) {
  try {
    const { id } = params;
  const fetchedtender= await getTenderById(id);
    console.log("Fetched tender:", fetchedtender);
    console.log(" Props after storing in const:",fetchedtender.Tender.closingDate);
  
    return (
      <EditTenderForm
        id={id}
        tenderId={fetchedtender.Tender.tenderId}
        tenderTitle={fetchedtender.Tender.tenderTitle}
        tenderDescription={fetchedtender.Tender.tenderDescription}
        publishDate={fetchedtender.Tender.publishDate}
        closingDate={fetchedtender.Tender.closingDate}
        tenderStatus={fetchedtender.Tender.tenderStatus}
        category={fetchedtender.Tender.category}
        tenderDocuments={fetchedtender.Tender.tenderDocuments}
        
      />
    );
  } catch (error) {
    console.log(error);
    return <div>Error fetching tender</div>;
  }
}