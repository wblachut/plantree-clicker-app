import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { dirtyIntervalClear } from "../files/helpers";
import { clearProgress } from "../redux/actions";
import leaf from "../icons/maple-leaf.svg";
import Stats from './Stats'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const Home = ({
  count,
  lvl,
  items,
  itemsCount,
  achievements,
  onClearProgress
}) => {
  return (
    <div className="home-container right row">
      <h5 className="home-title center">Home</h5>
      {count === 0 && (
        <div className="gray-text">
          <p>Go on!</p>
          Plant your 1st tree with <b className="teal-text">PlanTree!</b>
          <p>
            {" "}
            Click a big button with a sapling on it
            <span className="hide-on-small-only">
              , on the left side of the screen
            </span>
            .
          </p>
          <br />
        </div>
      )}
      {count < 100 && count > 0 && (
        <>
          <p className="center">Further Instructions</p>
          <div className="center justify">
            <p>
              <b className="teal-text">
                Congratulations you have planted your 1st tree!{" "}
              </b>
            </p>
            If you plant enought trees you will level up and unlock new content.
            Your clicker tree will grow up with you.
            <span className="hide-on-small-only">
              (you can measure your progress by following stats - under the
              clicker button)
            </span>
            . On higher levels you will be able to purchase helpers, planters
            and new tree icons in the shop tab. To pay in shop you need golden
            leaves <img className="text-icon" src={leaf} alt="golden-leaf" />,
            which can be obtained by leveling up and reaching new achievements.
            Achievements are unlocked by reaching certain milestones, and can be
            found in achievements tab. You have already unlocked your first
            achievement by planting your first tree!
          </div><br/>
          <p>
            <b className="teal-text darken-2">Good Luck with planting!</b>
          </p>
        </>
      )}
      {count > 100 && (
        <p>
          You have planted {count} trees and reached {lvl}th lvl.
        </p>
      )}
      {itemsCount > 0 && (
        <>
          <div className="home-items row text">
            {" "}
            <div className="home-helpers col s8 offset-s2 m3 offset-m2">
              Helpers:
              {items.map(
                (item) =>
                  item.isOwned &&
                  item.type === "count" && (
                    <p className="center" key="item.id">
                      <div className="item-helper teal darken-4 white-text">
                        {item.name}
                      </div>
                    </p>
                  )
              )}
            </div>
            <div className="home-planters col s8 offset-s2 m3 offset-m2">
              Workforce:
              {items.map(
                (item) =>
                  item.isOwned &&
                  item.type === "treesPerSec" && (
                    <p className="center" key="item.id">
                      <div className="item-planters badge orange darken-4 white-text">
                        <span>
                        {item.name}
                        </span>
                      </div>
                    </p>
                  )
              )}
            </div>
          </div>
        </>
      )}
      {/* <blockquote className="teal">
      This is an example quotation that uses the blockquote tag.
    </blockquote> */}
      <button
        className="reset-btn waves-effect waves-light btn"
        onClick={() => {
          dirtyIntervalClear();
          onClearProgress();
        }}>
        RESET PROGRESS
      </button>{" "}
      <br /> <br />
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
  lvl: state.lvl,
  gold: state.gold,
  achievements: state.achievements,
  items: state.items,
  itemsCount: state.itemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  // onAddItem: (items) => dispatch(clearProgress(items)),
  onClearProgress: () => dispatch(clearProgress())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//  <p> Planters:
//     {item.type === "treesPerSec" && (<p className="item-planter badge orange darken-4 white-text"> {item.name} </p>)}
//   </p>
// {item.isOwned && item.type === "count" && (<span className="item-require badge teal darken-4 white-text"> {item.name} </span>)}
// {item.type === "treesPerSec" && (<span className="item-require badge orange darken-3 white-text"> {item.name}</span>)}
