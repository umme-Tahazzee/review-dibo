"use client";

import React, { useState, useEffect } from "react";

//shadcn
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ReviewsPage() {
  const [shopName, setShopName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  //Check the browser have any reviews
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []);

  //
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
     e.preventDefault();
     if (!shopName || !reviewText || rating === 0)  return;
  

    const newReview = {
      id: editId || Date.now(),
      shopName,
      reviewText,
      rating,
      date: new Date().toLocaleString(),
    };

    if (editId) {
      setReviews(reviews.map((r) => (r.id === editId ? newReview : r)));
      setEditId(null);
    } else {
      setReviews([...reviews, newReview]);
    }

    setShopName("");
    setReviewText("");
    setRating(0);
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const handleEdit = (review) => {
    setShopName(review.shopName);
    setReviewText(review.reviewText);
    setRating(review.rating);
    setEditId(review.id);
  };

  const filteredReviews = reviews.filter((r) =>
    r.shopName.toLowerCase().includes(search.toLowerCase())
  );

  return (
   
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Left Side: Form */}
          <div className="xl:w-[50%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-transparent rounded-xl"
            >
              <h3 className="text-3xl text-accent">
                {editId ? "Edit Review" : "Submit a Review"}
              </h3>
              <p className="text-white/60">
                Share your online shopping experience with us.
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 gap-6">
                <Input
                  placeholder="Shop Name"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  required
                />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={24}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer ${
                      star <= rating ? "text-yellow-500" : "text-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <Textarea
                placeholder="Write your review here"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="h-[150px]"
                required
              />

              {/* Submit Button */}
              <Button type="submit" size="md" className="max-w-40 text-xl ">
                {editId ? "Update Review" : "Submit Review"}
              </Button>
            </form>
          </div>

          {/* Right Side: Search + Reviews */}
          
        </div>
      </div>
    
  );
}
