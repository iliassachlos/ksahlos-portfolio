import CategoriesGrid from "../components/shared/categories-grid";
import { collectionCategories } from "../data/collection-categories";

function CollectionPage() {
    return <CategoriesGrid categories={collectionCategories} />
}

export default CollectionPage;
