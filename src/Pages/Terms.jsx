import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/common/Footer";
import DivineNavbar from "../Components/common/Navbar";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <DivineNavbar />
      <Container fluid className="back-contain pt-5">
        <br />
        <br />
        <div className="p-2 p-xl-5">
          <h2>Divine Decores Terms & Condition</h2>
          <p>
            Disclaimer for the materials used, guarantee description, and your
            consumer rights.
          </p>
          <p>
            Divine Decores provides the following guarantees and policies in
            accordance with the Australian Consumer Law. We manufacture custom,
            hand-made wooden temples and home decor items from various wooden
            materials. These guarantees are offered in the context of what our
            customers should expect from Divine Decores subject to acceptance of
            the following disclaimer.
          </p>
          <h6>Quality Guarantee</h6>
          <p>
            At Divine Decores, we produce one of the finest quality mandir and
            home decores items. All temples are quality checked, subject to
            control measures to ensure that every piece is of appropriate size
            and shape.
            <br />
            Temples are manufactured on an order basis. Once you place the order
            we then select the best wood and different materials. Every piece we
            deliver has some unique feature from the previous one.
            <br />
            Minor difference in the final product, Each temple is handmade by
            our workers so there is a possibility of variations compared to the
            diagram or image sent.
          </p>
          <h6>Payment Terms</h6>
          <p>
            No surcharge for credit card 25% advance payment prior to
            commencement of work. Advance payment set deal between consumer and
            owner Final payment at the time of delivery Item remains the
            property of Divine Decores until full payment Quotes are valid up to
            7 days from the date of quote. A timeframe of 3-4 weeks should be
            given after the deposit is submitted.
          </p>
          <h6>Delivery</h6>
          <p>
            For all items delivery and installation are charged extra as per
            transporter quote. Local and interstate delivery is undertaken by a
            third-party transporter. Divine Decores does not have its own
            delivery company. Divine Decores does not take any responsibility
            for damage incurring in transit once the item has left our premises.
            Any defects that result in mishandling in delivery of all claims
            will be directed to the third-party delivery company. The final
            decision will be decided by the Divine Decores Management. If damage
            occurs in local delivery transit (Sydney or suburbs) we will review
            the damage and find the best possible solution. If any damage is
            caused it should be reported immediately after the delivery. The
            cost will be borne by the customer. If the damage is done interstate
            then we highly recommend the customer to buy the insurance as the
            transportation company will not claim any damage if no insurance is
            provided.
          </p>
          <h6>Production Timeframe</h6>
          <p>
            Mandirs 3-4 weeks after the deposit is received. We are bound to
            deliver all our orders within the above time frames. Occasionally
            due to unique design delays or handcrafting issues the time frame
            may take a bit longer. Peak season and festival time frame may be
            longer.
          </p>
          <h6>Cancellations</h6>
          <p>
            Order cancellations and alterations (alterations may impact the
            price) are allowed within a 2 day period from the time of advance
            payment or purchase. After this time, we will not accept
            cancellations or alterations and your advance becomes
            non-refundable.
          </p>
          <h6>Returns and Refunds Policy</h6>
          <p>
            Divine Decores is obliged under the imposition of Australian
            Consumer Law. If there is any minor issue with our product as per
            Australian Consumer Law and within the warranty period you are
            entitled to a goods repair or refund.
            <br />
            As per Australian Consumer Law refunds or returns on custom made
            items are offered only if: The item is faulty with manufacturing
            defects and this must be reported immediately on receiving the
            product or within 7 days of the defect becoming apparent. Photos and
            email details must be provided.
            <br />
            No refunds/ replacements/returns are offered in these conditions: If
            the customer does not like the final product, size & shape, overall
            dimensions of the product.
            <br />
            If it does not fit in your doorway, room, house, staircase. The
            customer rejects the final color, texture, handles, or other
            details. Does not look exactly like the photo in the catalog.
          </p>
          <h6>In the event a Return and Refund is authorized:</h6>
          <p>
            Divine Decores reserves the right to choose between repair or
            replacement or refund and return of an item in relation to which a
            valid claim has been made.
            <br />
            Return authorization must be obtained prior to the return of
            shipment. All returned merchandise must be in "like new" condition.
          </p>
        </div>
        <Footer />
      </Container>
      {/* 



 


 









Returns and Refunds Policy


*/}
    </>
  );
};
export default Terms;
