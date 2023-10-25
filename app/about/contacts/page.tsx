import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About page | Contacts",
  description: "Contacts page description",
};

const AboutContacts = () => (
  <>
    <h2>Contacts</h2>
    <p>Our contacts:</p>
    <ul className="mb-4">
      <li>John Smith john.smith@gmail.com</li>
      <li>Vasja Pupkin www.vasjapupkin.com</li>
    </ul>
    <p>Our address:</p>
    <ul>
      <li>London, 123 Main Street</li>
    </ul>
  </>
);

export default AboutContacts;
