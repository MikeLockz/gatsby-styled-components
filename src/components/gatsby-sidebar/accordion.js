import React, { Fragment } from "react";

import Item from "./item";
import { Title, TitleButton, SplitButton } from "./section-title";

const ItemWithSubitems = ({
  activeItemLink,
  createLink,
  isExpanded,
  isParentOfActiveItem,
  item,
  level,
  location,
  onLinkClick,
  onSectionTitleClick,
  uid
}) => {
  const SectionTitleComponent = item.disableAccordions ? Title : TitleButton;
  const isActive = item.link === activeItemLink.link;

  return (
    <Fragment>
      {item.link ? (
        <SplitButton
          createLink={createLink}
          isActive={isActive}
          isExpanded={isExpanded}
          isParentOfActiveItem={isParentOfActiveItem}
          item={item}
          level={level}
          location={location}
          onLinkClick={onLinkClick}
          onSectionTitleClick={onSectionTitleClick}
          uid={uid}
        />
      ) : (
        <SectionTitleComponent
          isActive={isActive}
          isExpanded={isExpanded}
          isParentOfActiveItem={isParentOfActiveItem}
          item={item}
          level={level}
          onSectionTitleClick={onSectionTitleClick}
          title={item.title}
          uid={uid}
        />
      )}
    </Fragment>
  );
};

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: (`` + Math.random()).replace(/\D/g, ``)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(...args) {
    if (this.props.onLinkClick) {
      this.props.onLinkClick(...args);
    }

    if (this.props.onSectionTitleClick) {
      this.props.onSectionTitleClick(...args);
    }
  }

  render() {
    const {
      activeItemLink,
      activeItemParents,
      createLink,
      isActive,
      isParentOfActiveItem,
      item,
      level,
      location,
      onLinkClick,
      onSectionTitleClick,
      openSectionHash
    } = this.props;
    const uid = `item_` + this.state.uid;
    const isExpanded = openSectionHash[item.title] || item.disableAccordions;

    return (
      <li>
        <ItemWithSubitems
          activeItemLink={activeItemLink}
          activeItemParents={activeItemParents}
          createLink={createLink}
          isActive={isActive}
          isExpanded={isExpanded}
          isParentOfActiveItem={isParentOfActiveItem}
          item={item}
          level={level}
          location={location}
          onLinkClick={onLinkClick}
          onSectionTitleClick={onSectionTitleClick}
          uid={uid}
        />
        <ul
          id={uid}
          style={{ listStyle: "none", margin: "0 0 0 1em", padding: "0" }}
        >
          {item.items.map(subitem => (
            <Item
              activeItemLink={activeItemLink}
              activeItemParents={activeItemParents}
              createLink={createLink}
              item={subitem}
              key={subitem.title}
              level={level + 1}
              location={location}
              onLinkClick={onLinkClick}
              isExpanded={isExpanded}
              onSectionTitleClick={onSectionTitleClick}
              openSectionHash={openSectionHash}
              ui={item.ui}
            />
          ))}
        </ul>
      </li>
    );
  }
}

export default Accordion;
