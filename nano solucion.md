Solución Laboratorio Node

Error 1
El código usaba:
import http from "http"

Esto no funciona en Node por defecto.

Solución:
Se cambió por:
const http = require("http")


Error 2
El código usaba:
import fs from "fs/promises"

Solución:
const fs = require("fs").promises


Error 3
El código usaba:
import path from "path"

Solución:
const path = require("path")


Error 4
Había errores de sintaxis (paréntesis mal cerrados)

Solución:
Se corrigieron los paréntesis y la estructura del código


Resultado final
El servidor ahora corre correctamente y todas las rutas funcionan.