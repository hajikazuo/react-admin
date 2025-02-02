import { DetailTools } from "../../shared/components";
import { Layout } from "../../shared/layout/Layout";

export const Dashboard = () => {
    return (
        <Layout
            title="Home Page"
            toolbar={(
                <DetailTools showSaveAndCloseButton
                    
                />
            )}
        >
            testando
        </Layout>
    );
}