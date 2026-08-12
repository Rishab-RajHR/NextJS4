
const DynamicMetaData = () => {
  return (
    <>
       <h2>Dynamic Meta Data In Next JS 16</h2>
    </>
  )
}

export default DynamicMetaData;


export function generateMetadata(){
     return {
         title: 'My First Project',
         description: "This is my First Next JS Project"
     }
}