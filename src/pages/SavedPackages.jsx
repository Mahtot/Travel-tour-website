import { useContext } from "react"
import { ApiContext } from "../context/ApiContext"
import ImageBox from "../components/ImageBox";


function SavedPackages() {
   const {savedPackages} = useContext(ApiContext)
    return (
        <div className="flex flex-col items-center py-10 mt-[150px] w-[80%] mx-auto">
                <h1 className="text-2xl 992:text-[40px]  mb-5 font-outfit self-start">Favorite Packages</h1>
                {savedPackages.length ===0 ? (
                    <p className="text-xl text-red-500 mb-5 font-outfit self-start">You have no saved Favorite tour packages.</p>
                ):
                <div className="grid grid-cols-2 785:grid-cols-3 gap-6">
                {savedPackages.map((item, index) => (
                    <div key={index} className="flex justify-center">
                    <ImageBox id={item.id} {...item} />
                    </div>
                ))}
                </div>
}
      </div>
  )
}
export default SavedPackages