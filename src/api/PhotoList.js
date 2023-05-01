import { useState, useEffect } from "react";

const usePhotoPagination = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=1`
      );
      const data = await response.json();
      setPhotos(data);
      const totalCountResponse = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const totalCountData = await totalCountResponse.json();
      setTotalPages(Math.ceil(totalCountData.length / 1));
    };
    fetchPhotos();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const prevPage = () => {
    setCurrentPage((page) => page - 1);
  };

  return { photos, currentPage, totalPages, nextPage, prevPage };
};

export default usePhotoPagination;
