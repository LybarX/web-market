<?php
header('Content-Type: application/json');

$validTokens = ['abc123', 'tokenxyz', 'user789']; // Ganti ini token valid kamu

$token = $_GET['token'] ?? '';

if (in_array($token, $validTokens)) {
    echo json_encode(['valid' => true]);
} else {
    echo json_encode(['valid' => false]);
}
?>
