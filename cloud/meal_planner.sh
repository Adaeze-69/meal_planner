#!/bin/bash

echo " Hi Jemima! How're you? Welcome to your meal plan. Please select a meal to plan for: "
echo "1: BREAKFAST"
echo "2: LUNCH"
echo "3: DINNER"



echo "Enter the square meal you want to plan for: " 
read meal


case $meal in
    1) 
        echo "Breakfast: 
        •Beans and Pap
        •moi moi and pap 
        •fried plantain and egg sauce
        •akara and oats
        •beans and plantain 
        •sandwich and tea
        •boiled plantain and vegetable sauce."
        ;;

    2)
        echo "Lunch:
            •Eba and Afang
            •Pounded Yam and Vegetable Soup
            •Banga Soup with Starch
            •Fufu and White Soup
            •Semo with Egusi
            •Plantain flour with Ogbono
            •Eba and Okro"
        ;;
    3)
        echo "Dinner: 
        •Fried Rice
        •Agidi and Goat Meat Pepper Soup
        •White Rice and Stew
        •Plantain and Beans
        •Jollof Rice
        •Coconut Rice
        •Plantain Porridge
        •Yam and Stew
        •Yam Porridge
        •Sweet Potatoes Porridge"
        ;;
    4)
        echo "Exiting the meal planner. Goodbye!"
        exit 0
        ;;
    *)
        echo "Invalid option. Please select a valid option (1, 2, 3, or 4)."
        ;;
esac