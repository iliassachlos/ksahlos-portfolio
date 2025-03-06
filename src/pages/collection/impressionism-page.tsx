import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function ImpressionismPage() {
    return <PhotoPage category={PhotoCategoryEnum.IMPRESSIONISM} />
}

export default ImpressionismPage;
