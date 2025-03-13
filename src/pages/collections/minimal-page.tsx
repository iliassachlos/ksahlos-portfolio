import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function MinimalPage() {
    return <PhotoPage category={PhotoCategoryEnum.MINIMALIST} />
}

export default MinimalPage;
