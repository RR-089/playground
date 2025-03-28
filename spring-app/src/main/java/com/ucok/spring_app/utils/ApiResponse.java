package com.ucok.spring_app.utils;

public record ApiResponse<T>(int status, String message, T data) {
}
