import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function SurrealismPage() {
    return <PhotoPage category={PhotoCategoryEnum.SURREALISM} />
}

export default SurrealismPage;
