import React from "react";
import { View, StyleSheet } from "react-native";

import PostBoardCard from "./PostBoardCard";
import CorkBoard from "./CorkBoard";

function PosterBoardView() {
  return (
    <div>
      <PostBoardCard />
      <CorkBoard />
    </div>
  );
}

export default PosterBoardView;

// type Props = {
//   behind: Corkboard,
//   front: PostBoardCard,
// //   under: React.Component,
// };

// // Show something on top of other
// export default class OverlayContainer extends React.Component<Props> {
//   render() {
//     const { behind, front, under } = this.props;

//     return (
//       <View style={styles.container}>
//         <View style={styles.center}>
//           <View style={styles.behind}>{behind}</View>
//           {front}
//         </View>
//         {/* {under} */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     height: "100%",
//     justifyContent: "center",
//   },
//   center: {
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   behind: {
//     alignItems: "center",
//     justifyContent: "center",
//     position: "absolute",
//     left: 0,
//     top: 0,
//     width: "100%",
//     height: "100%",
//   },
// });
