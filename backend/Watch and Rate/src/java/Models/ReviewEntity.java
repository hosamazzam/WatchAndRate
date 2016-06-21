package Models;

import java.sql.*;
import java.util.ArrayList;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author hosam azzam
 */
public class ReviewEntity {

    private int reviewId;
    private String title;
    private String Body;
    private String systemRate;
    private int userID;
    private String date;
    private ArrayList<RateEntity> rate;
    private ArrayList<CommentEntity> comment;
    private Sql sql;

    public ReviewEntity() {
        sql = new Sql();
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return Body;
    }

    public void setBody(String Body) {
        this.Body = Body;
    }

    public String getSystemRate() {
        return systemRate;
    }

    public void setSystemRate(String systemRate) {
        this.systemRate = systemRate;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public ArrayList<RateEntity> getRate() {
        return rate;
    }

    public void setRate(ArrayList<RateEntity> rate) {
        this.rate = rate;
    }

    public ArrayList<CommentEntity> getComment() {
        return comment;
    }

    public void setComment(ArrayList<CommentEntity> comment) {
        this.comment = comment;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public JSONObject getUserReviews(JSONObject json) {
        JSONObject ret = new JSONObject();
        JSONArray list = new JSONArray();

        try {
            sql.open();

            sql.Stetmnt = sql.Conection.createStatement();
            sql.ResStetmnt = sql.Stetmnt.executeQuery("SELECT * from review where  USER_ID= " + json.get("userid") + " ");

            boolean flage = false;
            while (sql.ResStetmnt.next()) {
                flage = true;

                JSONObject review = new JSONObject();
                title = sql.ResStetmnt.getString("TITLE");
                reviewId = sql.ResStetmnt.getInt("REVIEW_ID");
                date = sql.ResStetmnt.getString("DATE");
                Body = sql.ResStetmnt.getString("REVIEW_CONTENT");
                int mov_id = sql.ResStetmnt.getInt("MOVIE_ID");
                MovieEntity moiveEntity = new MovieEntity();

                String mov_name = moiveEntity.getmovie(mov_id);

                review.put("content", Body);
                review.put("mov_name", mov_name);
                review.put("date", date);
                review.put("review_title", title);
                review.put("mov_id", mov_id);
                review.put("rev_id", reviewId);
                list.add(review);

            }
            ret.put("status", "ownreview");

        } catch (SQLException ex) {
            ex.printStackTrace();
            ret.put("status", "something wrong ,Try again..");
        }

        ret.put("results", list);
        return ret;
    }

    public JSONObject writeReview(JSONObject json) throws SQLException {

        JSONObject ret = new JSONObject();

        MovieEntity movie = new MovieEntity();
        if (movie.insertmovie(json)) {

            try {

                sql.open();
                System.out.println("entered");
                sql.Stetmnt = sql.Conection.createStatement();
                sql.Stetmnt.executeUpdate("INSERT INTO review(TITLE,REVIEW_CONTENT ,IMAGE_REVIEW,STAR_RATE,USER_ID,MOVIE_ID,DATE,ENABLE_COMMENT) VALUES ('"
                        + json.get("title") + "','" + json.get("content") + "','" + json.get("image") + "','" + json.get("rate") + "','"
                        + json.get("userid") + "','" + json.get("movieid") + "','" + json.get("date") + "'," + json.get("enable") + ")");

                ret.put("status", "inserted");

            } catch (SQLException ex) {
                ex.printStackTrace();
                ret.put("status", "something wrong ,Try again..");
            }

        } else {

            ret.put("status", "error add movie to database");
        }

        return ret;
    }

    public JSONObject deleteReview(JSONObject json) {

        JSONObject ret = new JSONObject();
        try {
            sql.open();
            sql.Stetmnt = sql.Conection.createStatement();

            sql.Stetmnt.executeUpdate("DELETE FROM  review where USER_ID= " + json.get("userid") + " and REVIEW_ID = " + json.get("reviewid") + " ");

            ret.put("status", "deleted");

        } catch (SQLException ex) {
            ex.printStackTrace();
            ret.put("status", "failed");
        }

        return ret;
    }

    public JSONObject getReviewList(JSONObject json) {
        JSONObject ret = new JSONObject();
        JSONArray list = new JSONArray();

        try {
            sql.open();

            sql.Stetmnt = sql.Conection.createStatement();
            sql.ResStetmnt = sql.Stetmnt.executeQuery("SELECT * from review where  MOVIE_ID= " + json.get("movieid") + " ");

            boolean flage = false;
            while (sql.ResStetmnt.next()) {
                flage = true;

                JSONObject review = new JSONObject();
                title = sql.ResStetmnt.getString("TITLE");
                reviewId = sql.ResStetmnt.getInt("REVIEW_ID");
                date = sql.ResStetmnt.getString("DATE");
                Body = sql.ResStetmnt.getString("REVIEW_CONTENT");
                userID = sql.ResStetmnt.getInt("USER_ID");

                UserEntity user = new UserEntity();
                String user_name = user.getUsername(userID);

                int mov_id = sql.ResStetmnt.getInt("MOVIE_ID");
                MovieEntity moiveEntity = new MovieEntity();

                String mov_name = moiveEntity.getmovie(mov_id);

                review.put("content", Body);
                review.put("mov_name", mov_name);
                review.put("date", date);
                review.put("userid", userID);
                review.put("username", user_name);
                review.put("review_title", title);
                review.put("mov_id", mov_id);
                review.put("rev_id", reviewId);
                list.add(review);

            }
            ret.put("status", "reviewlist");

        } catch (SQLException ex) {
            ex.printStackTrace();
            ret.put("status", "something wrong ,Try again..");
        }

        ret.put("results", list);
        return ret;

    }

    public JSONObject getreviewinfo(JSONObject json) {
        JSONObject ret = new JSONObject();

        try {
            sql.open();
            sql.Stetmnt = sql.Conection.createStatement();
            sql.ResStetmnt = sql.Stetmnt.executeQuery("SELECT * from review where  REVIEW_ID= " + json.get("rev_id") + " ");

            if (sql.ResStetmnt.next()) {
                title = sql.ResStetmnt.getString("TITLE");
                reviewId = sql.ResStetmnt.getInt("REVIEW_ID");
                date = sql.ResStetmnt.getString("DATE");
                Body = sql.ResStetmnt.getString("REVIEW_CONTENT");

                userID = sql.ResStetmnt.getInt("USER_ID");

                UserEntity user = new UserEntity();
                String user_name = user.getUsername(userID);

                int mov_id = sql.ResStetmnt.getInt("MOVIE_ID");
                MovieEntity moiveEntity = new MovieEntity();

                String mov_name = moiveEntity.getmovie(mov_id);

                ret.put("content", Body);
                ret.put("mov_name", mov_name);
                ret.put("date", date);
                ret.put("userid", userID);
                ret.put("username", user_name);
                ret.put("review_title", title);
                ret.put("review_rate", sql.ResStetmnt.getFloat("STAR_RATE"));
                ret.put("mov_id", mov_id);
                ret.put("rev_id", reviewId);
                ret.put("rev_comment", sql.ResStetmnt.getInt("ENABLE_COMMENT"));
                ret.put("rev_img", sql.ResStetmnt.getString("IMAGE_REVIEW"));
 ret.put("status", "reviewinfo");
            }
            
           

        } catch (SQLException ex) {
            ex.printStackTrace();
            ret.put("status", "something wrong ,Try again..");
        }

        return ret;
    }

}