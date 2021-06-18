import { JsonLd } from "react-schemaorg";
import { Organization } from "schema-dts";

const BaseSchema = () => {
  return (
    <JsonLd<Organization>
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        sameAs: [],
        name: "DND 5E Sidekick",
        description:
          "DND 5E Sidekick tool website to help you manage and play.",
        url: "https://www.dndsidekick.com",
        // logo: "",
        foundingDate: "2021",
      }}
    />
  );
};

export default BaseSchema;
