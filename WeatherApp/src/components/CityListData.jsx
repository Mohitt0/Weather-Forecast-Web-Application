import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from 'react-router-dom';

const CityListData = ({filterData,fetchMoreData,hasMore}) => {
  return (
    <div className="flex justify-center">
    <InfiniteScroll
      dataLength={filterData?.length}
      next={fetchMoreData}
      hasMore={hasMore}
      height={400}
      style={{ overflowX: "hidden" }}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className=" overflow-x-auto mx-auto mb-24 max-w-[800px] shadow-2xl">
        <table className="tbl-content table-auto border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600  bg-slate-400">
                City Name
              </th>
              <th className="border border-slate-600 bg-slate-400">
                Country
              </th>
              <th className="border border-slate-600 bg-slate-400">
                Timezone
              </th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {filterData &&
              filterData?.map((city) => (
                <tr key={city.geoname_id}>
                  <td style={{cursor:"pointer"}}>
                  <Link to={`/weather/${city.name},${city.country_code}`}>{city.name}</Link>
                  </td>
                  <td>{city.cou_name_en}</td>
                  <td>{city.timezone}</td>
                  {/* You need to fetch additional data for country and timezone here */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </InfiniteScroll>
  </div>
  )
}

export default CityListData