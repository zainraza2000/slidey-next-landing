import React from "react";
import ClientSection from "@/components/client/ClientSection";
import Counting from "@/components/ContactUs/Counting";
import Layout from "@/components/shared/Layout";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const page = () => {
  return (
    <Layout>
      <ContactUsSection />
      <ClientSection />
      <Counting />
    </Layout>
  );
};

export default page;
