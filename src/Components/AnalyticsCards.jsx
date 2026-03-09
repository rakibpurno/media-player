import React from "react";

export default function AnalyticsCards({ videos }) {

  const totalViews = videos.reduce((a,v)=>a+v.views,0);
  const totalLikes = videos.reduce((a,v)=>a+v.likes,0);
  const totalComments = videos.reduce((a,v)=>a+v.comments.length,0);

  return (

    <div className="analytics-cards">

      <div className="card">
        <h3>Total Views</h3>
        <p>{totalViews}</p>
      </div>

      <div className="card">
        <h3>Total Likes</h3>
        <p>{totalLikes}</p>
      </div>

      <div className="card">
        <h3>Total Comments</h3>
        <p>{totalComments}</p>
      </div>

      <div className="card">
        <h3>Total Videos</h3>
        <p>{videos.length}</p>
      </div>

    </div>

  );

}