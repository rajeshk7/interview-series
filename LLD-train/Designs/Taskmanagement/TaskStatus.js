"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["PENDING"] = 0] = "PENDING";
    TaskStatus[TaskStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    TaskStatus[TaskStatus["COMPLETED"] = 2] = "COMPLETED";
})(TaskStatus || (TaskStatus = {}));
exports.default = TaskStatus;
