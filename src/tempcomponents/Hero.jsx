"use client";

import React, { useState, useEffect } from "react";

//shadcn
import { FaStar } from "react-icons/fa";
import { Button } from "@/tempcomponents/ui/button";
import { Input } from "@/tempcomponents/ui/input";
import { Textarea } from "@/tempcomponents/ui/textarea";
import { ScrollArea } from "@/tempcomponents/ui/scroll-area";
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
              <Button type="submit" size="md" className="max-w-40 text-xl text-[#84F729]  ">
                {editId ? "Update Review" : "Submit Review"}
              </Button>
            </form>
          </div>

          {/* Right Side: Search + Reviews */}
          <div className="flex-1 order-1 xl:order-none">
            <div className="p-6 bg-transparent rounded-xl">
              <h3 className="text-2xl text-accent mb-4">All Reviews</h3>

              <Input
                placeholder="Search by shop name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4"
              />

              <ScrollArea className="h-[70vh] pr-2 ">
                {filteredReviews.length > 0 ? (
                  filteredReviews.map((r) => (
                    <div
                      key={r.id}
                      className="border border-gray-700 p-4 rounded-lg mb-4 bg-gray-600 space-y-3"
                    >
                      <h4 className="font-bold text-white text-4xl">{r.shopName}</h4>
                      <div className="flex text-yellow-500 mb-1">
                        {[...Array(r.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="text-white/80">{r.reviewText}</p>
                      <small className="text-gray-400 block">{r.date}</small>
                      <div className="mt-2 flex gap-2">
                        <Button
                          onClick={() => handleEdit(r)}
                          className="bg-green-500 hover:bg-green-600 text-white"
                          size="sm"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => handleDelete(r.id)}
                          className=" "
                          size="sm"
                        >
                         < RiDeleteBin6Line className="size-6 
                         text-red-500 hover:bg-red-500"/>
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No reviews found.</p>
                )}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    
  );
}
