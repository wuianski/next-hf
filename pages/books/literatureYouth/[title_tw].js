import * as React from "react";
import { fetchAPI } from "../../../lib/api";
import Layout from "../../../components/layout";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Nav from "../../../components/nav";
import { format } from "date-fns";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import Link from "next/link";

/** stack Item setting **/
const Item = styled(Paper)(({ theme }) => ({
  //...theme.typography.body2,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  textAlign: "left",
  color: "#000",
  background: "none",
  boxShadow: "none",
}));

function Book({ book, contact }) {
  /** sorting dataset by id **/
  //!dataset ? null : dataset.sort((a, b) => b.order - a.order);
  /** route each post **/
  //const router = useRouter();
  //const data = router.query.id || [];

  //console.log(book);
  return (
    <>
      <Nav contact={contact} />
      <Box id="myMenuInPage">
        <div /*data-menuanchor="section1"*/ className="active secName">
          <div className="secName_twInPage">出版</div>
          <div className="secName_enInPage">publication</div>
        </div>
      </Box>
      <Box ml={{ xs: 8, md: 33 }} mr={{ xs: 2, md: 28 }} mt={20} mb={4}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          <Item>
            <Box width={200}>
              <Image
                src={
                  !!book.cover && !!book.cover.url
                    ? book.cover.url
                    : "/IMGs/noBook_img.jpg"
                }
                alt="book cover"
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
                width={152}
                height={223}
              />
            </Box>
          </Item>
          <Item>
            <Box>
              <Box
                sx={{ fontSize: { xs: "14px", xl: "17px" }, color: "#666" }}
                mb={2}
              >
                <Box component="span">{book.book_categories[0].name}</Box>
                <Box component="span"> / </Box>
                <Box component="span">{book.book_categories[1].name}</Box>
              </Box>
              <Box sx={{ fontSize: { xs: "44px", xl: "47px" } }}>
                {book.title_tw}
              </Box>
              <Box
                sx={{ width: 31, height: 0, border: "1px solid #000000" }}
                mt={2}
                mb={2}
              />
              {book.author_tw && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    作者
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "18px", xl: "21px" },
                      fontWeight: { xs: 700, xl: 700 },
                    }}
                  >
                    {book.author_tw}
                  </Box>
                </Box>
              )}
              {book.translator_tw && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    譯者
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "18px", xl: "21px" },
                      fontWeight: { xs: 700, xl: 700 },
                    }}
                  >
                    {book.translator_tw}
                  </Box>
                </Box>
              )}
              {book.editor_tw && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    編者
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "18px", xl: "21px" },
                      fontWeight: { xs: 700, xl: 700 },
                    }}
                  >
                    {book.editor_tw}
                  </Box>
                </Box>
              )}
              {book.illustrator_tw && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    繪者
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "18px", xl: "21px" },
                      fontWeight: { xs: 700, xl: 700 },
                    }}
                  >
                    {book.illustrator_tw}
                  </Box>
                </Box>
              )}
              <Box
                sx={{ width: 31, height: 0, border: "1px solid #000000" }}
                mt={2}
                mb={2}
              />
              {book.publisher && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    出版社
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "14px", xl: "17px" },
                      fontWeight: { xs: 700, xl: 700 },
                    }}
                  >
                    {book.publisher}
                  </Box>
                </Box>
              )}
              {book.publication_date && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    出版日期
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "13px", xl: "15px" },
                      fontWeight: { xs: 500, xl: 500 },
                    }}
                  >
                    {book.publication_date &&
                      format(new Date(book.publication_date), "yyyy/MM/dd")}
                  </Box>
                </Box>
              )}
              {book.isbn10 && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    ISBN10
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "13px", xl: "15px" },
                      fontWeight: { xs: 500, xl: 500 },
                    }}
                  >
                    {book.isbn10}
                  </Box>
                </Box>
              )}
              {book.isbn13 && (
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "12px", xl: "15px" },
                      display: "inline-block",
                      width: 68,
                    }}
                  >
                    ISBN13
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: { xs: "13px", xl: "15px" },
                      fontWeight: { xs: 500, xl: 500 },
                    }}
                  >
                    {book.isbn13}
                  </Box>
                </Box>
              )}
              <Box
                sx={{ width: 31, height: 0, border: "1px solid #000000" }}
                mt={2}
                mb={2}
              />
              {book.introduce_tw && (
                <Box
                  sx={{
                    maxWidth: 416,
                    fontSize: { xs: "14px", xl: "17px" },
                    fontWeight: { xs: 500, xl: 500 },
                  }}
                >
                  {book.introduce_tw}
                </Box>
              )}
              {book.introduce_en && (
                <Box
                  sx={{
                    maxWidth: 416,
                    fontSize: { xs: "14px", xl: "17px" },
                    fontWeight: { xs: 500, xl: 500 },
                  }}
                >
                  {book.introduce_en}
                </Box>
              )}
            </Box>
          </Item>
        </Stack>
        <Box>
          <Link href="/publications" scroll={false}>
            <Stack
              direction="row"
              spacing={0}
              sx={{
                position: { xs: "relative", md: "fixed" },
                justifyContent: { xs: "end", md: "unset" },
                top: { xs: 60, md: "unset" },
                marginBottom: { xs: "80px", md: "unset" },
                bottom: { md: 68, xl: 68 },
                right: { md: 68, xl: 68 },
                cursor: "pointer",
              }}
              height={"38px"}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#000" }}
              />
              <Item>
                <Box
                  pl={1}
                  sx={{
                    lineHeight: "38px",
                    textTransform: "uppercase",
                    fontSize: { md: 12, xl: 15 },
                    fontWeight: 700,
                  }}
                >
                  返回 back
                </Box>
              </Item>
              <Item>
                <Box pr={1}>
                  <Image
                    src="/IMGs/back_icon.png"
                    alt="back icon"
                    width={38}
                    height={38}
                  />
                </Box>
              </Item>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#000" }}
              />
            </Stack>
          </Link>
        </Box>
      </Box>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get books = 青少年文學
  const books = await fetchAPI("/books?book_categories=15");

  // Get the paths we want to pre-render based on books
  const paths = books.map((book) => ({
    params: { title_tw: book.title_tw },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    //paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    paths,
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the book `title_tw`.
  // If the route is like /books/煙愁, then params.title_tw is 煙愁
  const books = await fetchAPI(`/books?title_tw=${encodeURI(params.title_tw)}`);
  const contact = await fetchAPI("/contact");

  // Pass book data to the page via props
  return { props: { book: books[0], contact } };
}

export default Book;

Book.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
