import React from 'react';
import axios from 'axios';
import Wrapper from 'components/site/wrapper';
import PageContainer from '@/components/site/container/pageContainer';

export default function Index(props) {
  // console.log(`props--`,props)
  return (
    <>
      {/* <TopSection/> */}
      <PageContainer>12</PageContainer>
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

// export async function getStaticProps(context) {
//   const photos = await axios.get(`${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}`)
//     .then((response) => response.data)
//     .then((data) => {
//       const resData = {
//         ...data,
//         records: data.records.map(d=>({
//           ...d,
//           qEco: d.url.replace("/upload/", "/upload/q_25/"),
//           qBest: d.url.replace("/upload/", "/upload/q_auto:best/"),
//           newTimestamp: new Date(d.timestamp).getTime()
//         }))
//       }
//       return resData
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   return {
//     props: photos, // will be passed to the page component as props
//   }
// }

// `getStaticPaths` allows the user to return a list of parameters to
// render to HTML at build time.
// export async function getStaticPaths() {
//   const photos = await axios.get(`${process.env.G_SHEET}/photo-collection?q={"published": "TRUE"}`)
//     .then((response) => response.data)
//     .then((data) => {
//       const resData = {
//         ...data,
//         records: data.records.map(d=>({
//           ...d,
//           qEco: d.url.replace("/upload/", "/upload/q_25/"),
//           qBest: d.url.replace("/upload/", "/upload/q_auto:best/"),
//           newTimestamp: new Date(d.timestamp).getTime()
//         }))
//       }
//       return resData
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//     const arr = await photos.records.map(d=> ({ params: { slug: d.id } }))

//     console.log(`arr-`,arr)

//   return {
//     // Opt-out of the described fallback behavior
//     fallback: false,
//     paths: arr
//   };
// }

// [
//   { params: { slug: "all" } },
//   { params: { slug: "lantauLandscape" } },
//   { params: { slug: "lantauEcology" } }
// ]
