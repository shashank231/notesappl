from rest_framework import generics
from .models import Note
from .serializers import NoteSerializer
from rest_framework.permissions import AllowAny



class NoteListAPIView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [AllowAny] 


class NoteDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
