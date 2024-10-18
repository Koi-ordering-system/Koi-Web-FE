import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { CloudUpload } from "lucide-react";

interface FileInputProps {
  onFilesSelected: (files: File[]) => void;
}

export function FileInput({ onFilesSelected }: FileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onFilesSelected(Array.from(files));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      onFilesSelected(
        Array.from(files).filter((file) => file.type.startsWith("image/"))
      );
    }
  };

  return (
    <div
      className="p-8 text-center transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-primary"
      onClick={() => fileInputRef.current?.click()}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
      />
      <CloudUpload className="w-12 h-12 mx-auto text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Drag and drop images here, or click to select files
      </p>
    </div>
  );
}
