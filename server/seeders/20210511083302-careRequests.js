"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "careRequests",
      [
        {
          clientName: "John Doe",
          careNeeded: "household",
          startDate: new Date("2021-05-11"),
          endDate: new Date("2021-05-14"),
          extraInformation: "Hurt my knee help me",
          statusOpen: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clientName: "Caroline Doe",
          careNeeded: "medical",
          startDate: new Date("2021-05-11"),
          endDate: new Date("2021-06-18"),
          extraInformation: "Fell in the shower",
          statusOpen: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clientName: "Leo Messi",
          careNeeded: "household",
          startDate: new Date("2021-06-12"),
          endDate: new Date("2021-06-19"),
          extraInformation: "Hurt my ankle playing football",
          statusOpen: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          clientName: "Cristiano Ronaldo",
          careNeeded: "medical",
          startDate: new Date("2021-07-24"),
          endDate: new Date("2021-08-11"),
          extraInformation: "",
          statusOpen: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("careRequests", null, {});
  },
};
