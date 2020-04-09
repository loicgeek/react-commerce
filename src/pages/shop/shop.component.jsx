import React from "react";

import CollectionPreview from "../../components/preview-collection/preview-collection.component";

import { SHOP_DATA } from "./shop.data";

import "./shop.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...othersProps }) => (
          <CollectionPreview key={id} {...othersProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
